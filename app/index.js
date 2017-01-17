import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import './index.css'

const TwitterHandle = ({handle}) => <a  className="handle" href={`https://twitter.com/${handle.slice(1)}`} target="_blank">{handle}</a>
const TwitterName = ({name}) => <span  className="name">{name}</span>
const Time = ({time}) => <span  className="time">{time}</span>
const Avatar = ({avatar}) => <img className="avatar" src={avatar} alt="Avatar"/>
const Message = ({msg}) => <div  className="msg">{msg}</div>
const FontAwesomeComponent = ({name}) => <FontAwesome className="font-awesome-component" size='2x' name={name} />

const TweetDisplay = ({avatar, handle, name, time, msg}) => (
													<div className="tweet">
														<Avatar avatar={avatar}/>
														<TwitterName name={name}/>
														<TwitterHandle handle={handle}/>
														<Time time={time}/>
														<Message msg={msg}/>
														<FontAwesomeComponent name='reply' />
														<FontAwesomeComponent name='retweet' />
														<FontAwesomeComponent name='heart' />
														<FontAwesomeComponent name='ellipsis-h' />
													 </div>
												)

const Tweet = () => (
				<div>
					<h1>Tweet Component React</h1>
					<TweetDisplay avatar="app/1.jpeg" handle="@deadcoder0904" name="A2K" time="- 5 hours ago" msg="It's easy to fool the eye...................................................  but it's hard to fool the heart...............................................  -Al Pacino"/>
					<TweetDisplay avatar="app/2.jpg" handle="@WWEBrayWyatt" name="Bray Wyatt" time="-10 hours ago" msg="They're watching us....They're listening to us....Your freedom is a birdcage.Rise ..#DisObey.. #DownWithTheMachine"/>
					<TweetDisplay avatar="app/3.jpeg" handle="@girard_yann" name="Yann Girard" time="- 23 hours ago" msg="They say give your best work away for free. This is the best work I’ve ever created in my whole entire life. This is my whole life…"/>
				</div>
			)

ReactDOM.render(<Tweet />, document.getElementById('app'));
