import React, { useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'
import { globalHistory as history } from "@reach/router"
import './comment.css'
import CommentPost from './commentPost'


const useItems = () => {
      const { location, navigate } = history // doctors-article/10
      console.log('◇',location.pathname)
      const pathname = location.pathname
      //const _location = pathname.replace(/\//g, '') // スラッシュを削除
      const slug = pathname // doctors-article/10

      const [repItems, setRepitems] = useState([]);

      let props = 'xYZCEv9LMj6hOkYMIwvc'

      useEffect(() => {
          const unsubscribe = firebase

          const replySnapshot = firebase.firestore().collectionGroup("replied")
            .where("parentId","==",props)

            replySnapshot.get()
            .then(snapshot => {
              const data = []
              snapshot.forEach(d => {
                  //console.log(d.id, ' => ', d.data());
                data.push({
                  id: d.id,
                  ...d.data(),
                })
              });
              setRepitems(data)
            });
          return () => unsubscribe();
      }, []);
      return repItems;
};


const RepList = () => {
      console.log('◆useItems()[0]',useItems()[0])
      console.log('◆useItems()[1]',useItems()[1])
      const listItem = useItems()[0]
      const repItem = useItems()[1]
  
      return (
        <>
        <div className="comment-box">
        <h6>返信コメント</h6>
        <CommentPost />
            {repItem.map(item => (
              <div key={item.id} className="comment">
                  <p className="comment-header">{item.name}</p>
                  <p className="comment-header">{item.type}</p>
                  <p className="comment-body">{item.comment}</p>
                  <div className="comment-footer">{item.slug}　
                  　{item.parentId}
                    {new Date(item.created.seconds * 1000).toLocaleDateString("ja-JP")} {new Date(item.created.seconds * 1000).toLocaleTimeString("ja-JP")}
                  </div>
                <button type="submit">返信</button>
              </div>
            ))}
        </div>
        </>
      )
}

export default RepList
