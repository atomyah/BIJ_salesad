import React, { useEffect, useState } from 'react'
import firebase from '../../utils/firebase'
import { globalHistory as history } from "@reach/router"
import './comment.css'
import CommentPost from './commentPost'


const useItems = () => {
      const { location, navigate } = history // doctors-article/10
      console.log('◇',location.pathname)
      const pathname = location.pathname
      //const _location = pathname.replace(/\//g, '') // スラッシュを削除
      const slug = pathname // doctors-article/10

      const [items, setItems] = useState([]);

      useEffect(() => {
          const unsubscribe = firebase
          const postSnapshot = firebase.firestore().collection("comments")
            .where("slug","==",slug)
            .orderBy("created","desc");
        postSnapshot.get()
            .then(snapshot => {
              const data = []
              snapshot.forEach(d => data.push({ // snapshot.doc.mapではだめだった
                  id: d.id,
                  ...d.data(),
                }));
                setItems(data)
            });
          //return () => unsubscribe(); 
          //不思議だがunscribe()しないとうまくいく。
          //するとページ遷移で TypeError: unsubscribe() not a function
          //しかし、しないと遷移先ページでコメントが表示されない…
      }, []); 
      return items;
};

const ItemList = () => {
      console.log('◆useItemsは、',useItems())
      const listItem = useItems()

      return (
        <>
        <div className="comment-box">
        <h3>コメント欄</h3>
        <CommentPost />
            {listItem.map(item => (
              <div key={item.id} className="comment">
                  <p className="comment-header">{item.name} | {item.type} | {new Date(item.created.seconds * 1000).toLocaleDateString("ja-JP")} {new Date(item.created.seconds * 1000).toLocaleTimeString("ja-JP")}</p>
                  <p className="comment-body">{item.body}</p>
                  <div className="comment-footer">{item.slug}</div>
              </div>          
            ))}
        </div>
        </>
      )
}

export default ItemList

/*
export default () => {
    const { location, navigate } = history // doctors-article/10
    console.log('◇',location.pathname)
    const pathname = location.pathname
    //const _location = pathname.replace(/\//g, '') // スラッシュを削除
    const slug = pathname // doctors-article/10

    firebase
      .firestore()
      .collection("comments")
      .add({
        name: "Atom",
        body: "コメントテスト２",
        slug: slug,
        created: new Date()
      })
      .then(ref => {
        console.log("作成されたドキュメントのIDは、: ", ref.id)
      })
  
    return (
      <div>
        <h1>コメント欄</h1>
      </div>
    )
  }
  */