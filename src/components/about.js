import React from 'react'

import tribesteemup from '../img/about/pic-tribesteemup.png'
import kenny from '../img/about/pic-kennyskitchen.png'



import './about.css'

export class About extends React.Component {
  render () {
    const portraitInfo = [{
      portrait: tribesteemup,
      name: '@TribeSteemUp',
      title: 'Developed by Kennyskitchen'
    }, {
      portrait: kenny,
      name: '@kennyskitchen',
      title: 'Founder'
    }
    ]

    const portraitComponents = portraitInfo.map((person, index) => {
      return (
        <div key={index} className="portrait">
          <img src={person.portrait} alt={person.name}
               className={person.name === '@tribesteemup' || '@kennyskitchen' || 'tribesteemup' ? 'kennykitchen' : undefined}/>
          <div className="name">{person.name}</div>
          <div className="title">{person.title}</div>
        </div>
      )
    })


    return (
        <div className="about">
          <div className="mission-team">
            <div className="mission">
              <h2>Idea</h2>
              <p>@TribeSteemUp is a collective voting bot, created to support content & content creators 
		 focused on making the world a more peaceful & free place. Most of its role in this steem-ciety 
		 is simply to curate, to help the Steem block-chain recognize & reward the value of great content. 
		 The focus is on high-quality content, from under-recognized content creators.
	      </p>
            </div>
            <div className="team">
              <h2>Community</h2>
              <p>The <strong>@TribeSteemUp</strong> community is build upon an invite-only policy in order to keep
		 the growth organic and select only new members that fit into the mindset of the group.

		 We support content from the following topics:


		 Anarchy | Non-Violence | Philosophy | Veganism | Mindfulness |
		 Community Empowerment | Love | Original Music | Esotericism |
		 Healthy Recipes | Psychedelics | Truth | Permaculture
		</p>
            </div>
          </div>
          <div className="about-portraits">
            {portraitComponents}
          </div>
        </div>
    )
  }
}

