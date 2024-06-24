import React, { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Anim voluptate irure nisi eu culpa...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Anim voluptate irure nisi eu culpa...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Anim voluptate irure nisi eu culpa...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Anim voluptate irure nisi eu culpa...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Anim voluptate irure nisi eu culpa...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Anim voluptate irure nisi eu culpa...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>
                Pariatur minim proident magna qui deserunt ipsum officia duis
                magna veniam nostrud consequat mollit. Magna Lorem qui ea quis
                enim aliqua deserunt ea reprehenderit id. Qui ut incididunt id
                Lorem culpa officia aliqua sit incididunt sint labore.
                Incididunt velit nostrud quis in proident dolor esse nisi mollit
                eu ea.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Pariatur minim proident magna qui deserunt ipsum officia duis
                magna veniam nostrud consequat mollit. Magna Lorem qui ea quis
                enim aliqua deserunt ea reprehenderit id. Qui ut incididunt id
                Lorem culpa officia aliqua sit incididunt sint labore.
                Incididunt velit nostrud quis in proident dolor esse nisi mollit
                eu ea.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Pariatur minim proident magna qui deserunt ipsum officia duis
                magna veniam nostrud consequat mollit. Magna Lorem qui ea quis
                enim aliqua deserunt ea reprehenderit id. Qui ut incididunt id
                Lorem culpa officia aliqua sit incididunt sint labore.
                Incididunt velit nostrud quis in proident dolor esse nisi mollit
                eu ea.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Pariatur minim proident magna qui deserunt ipsum officia duis
                magna veniam nostrud consequat mollit. Magna Lorem qui ea quis
                enim aliqua deserunt ea reprehenderit id. Qui ut incididunt id
                Lorem culpa officia aliqua sit incididunt sint labore.
                Incididunt velit nostrud quis in proident dolor esse nisi mollit
                eu ea.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Pariatur minim proident magna qui deserunt ipsum officia duis
                magna veniam nostrud consequat mollit. Magna Lorem qui ea quis
                enim aliqua deserunt ea reprehenderit id. Qui ut incididunt id
                Lorem culpa officia aliqua sit incididunt sint labore.
                Incididunt velit nostrud quis in proident dolor esse nisi mollit
                eu ea.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Pariatur minim proident magna qui deserunt ipsum officia duis
                magna veniam nostrud consequat mollit. Magna Lorem qui ea quis
                enim aliqua deserunt ea reprehenderit id. Qui ut incididunt id
                Lorem culpa officia aliqua sit incididunt sint labore.
                Incididunt velit nostrud quis in proident dolor esse nisi mollit
                eu ea.
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
