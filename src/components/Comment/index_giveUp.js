import React, { useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'
import { globalHistory as history } from "@reach/router"
import './comment.css'
import CommentPost from './commentPost'
import ReplyPost from './replyPost'


const useItems = () => {
      const { location, navigate } = history // doctors-article/10
      console.log('◇',location.pathname)
      const pathname = location.pathname
      //const _location = pathname.replace(/\//g, '') // スラッシュを削除
      const slug = pathname // doctors-article/10

      const [items, setItems] = useState([]);
      const [repItems, setRepitems] = useState([]);
      

      useEffect(() => {
          const unsubscribe = firebase

          const postSnapshot = firebase.firestore().collectionGroup("comments")
            .where("slug","==",slug)
            .orderBy("created","desc");

            const replySnapshot = firebase.firestore().collectionGroup("replied")

          postSnapshot.get()
            .then(snapshot => {
              const data = []
              snapshot.forEach(d => {
                  //console.log(d.id, ' => ', d.data());
                data.push({
                  id: d.id,
                  ...d.data(),
                })
              });
               setItems(data)
            });         
          replySnapshot.get()
            .then(subSnapshot => {
              const repData = []
              subSnapshot.forEach(_d => {
                //console.log(_d.id, '==',_d.data());
                repData.push({
                  id: _d.id,
                  ..._d.data()
                })
                setRepitems(repData)
              })
            })
          return () => unsubscribe();
      }, []);
      return [items, repItems];
};

// 返信コメント用の処理　//
/*
素の書き込みはlistItem, 返信書き込みはrepItemに。
itemだったらそのidを新しい返信投稿のparentIdに格納。
repだったらそのparentIdをそのまま新しい返信投稿のparentIdに格納。
このようにして素の書き込みへの返信だけをインデントする設計
（1段階のみ。返信への返信は素の書き込みへの返信と同じ扱いになる）
上記のFirestore().where(スラグ).getで全データをとってきて
そのうちrepliedサブコレクションの中からparentIdがitem.idと一致する返信を
該当item(素の書き込み)の下にインデントして羅列するようにする。
*/
const ItemList = () => {
      console.log('◆useItems()[0]',useItems()[0])
      console.log('◆useItems()[1]',useItems()[1])
      const listItem = useItems()[0]
      const repItem = useItems()[1]

      const initialItemState = [
        {  parentId: "", id: "" }
      ]
      const [currentItem, setCurrentItem] = useState(initialItemState)
      const [replying, setReplying] = useState(false)
  
      const displayReplyForm = (arg) => {
        //console.log('▲argは～ ',arg.id)
        setReplying(true)
        setCurrentItem({
          id: arg.id,
          parentId: arg.id,
        })
        //console.log('▲targetIdは～ ',)
      }

      return (
        <>
        <div className="comment-box">
        <h3>コメント欄</h3>
        <CommentPost />
            {listItem.map(item => (
              <div key={item.id} className="comment">
                  <p className="comment-header">{item.name} | {item.type}</p>
                  <p className="comment-body">{item.comment}</p>
                  <div className="comment-footer">{item.slug}　
                    {new Date(item.created.seconds * 1000).toLocaleDateString("ja-JP")} {new Date(item.created.seconds * 1000).toLocaleTimeString("ja-JP")}
                  </div>
                  <button onClick={() => displayReplyForm(item)}>返信</button>&nbsp;
                  <button onClick={() => setReplying(false)}>キャンセル</button>
                  {replying && item.id === currentItem.id ? 
                      (<div id={item.id}><ReplyPost props={currentItem} /></div>) : ("")
                  }
                    {repItem.map(rep => rep.parentId === item.id ? 
                      <div key={rep.id} className="replycomment">
                        <p className="comment-header">{rep.name} | {rep.type}</p>
                        <p className="comment-header">{rep.parentId}</p>
                        <p className="comment-body">{rep.comment}</p>
                        <div className="comment-footer">{rep.slug}　
                          {new Date(rep.created.seconds * 1000).toLocaleDateString("ja-JP")} {new Date(item.created.seconds * 1000).toLocaleTimeString("ja-JP")}
                        </div>
                        <button onClick={() => displayReplyForm(rep)}>返信</button>&nbsp;
                        <button onClick={() => setReplying(false)}>キャンセル</button>
                        {replying && rep.id === currentItem.id ? 
                          <div id={rep.id}><ReplyPost /></div> : ""
                        }
                      </div>
                       : 
                      ""                   
                    )}
              </div>          
            ))}
        </div>
        </>
      )
}

export default ItemList
