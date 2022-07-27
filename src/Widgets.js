import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon className="widgets__icon" />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {newsArticle(
        'Microsoft is hiring',
        'Top news-This year Microsoft is hiring from Tier2 colleges as well'
      )}
      {newsArticle(
        'PM in Germany',
        'PM Narendra Modi on Sunday, while addressing the Indian diaspora in Germany Munich, said, "We Indians are proud of our democracy".'
      )}
      {newsArticle(
        'Lanka in crisis',
        'Sri Lanka on Sunday hiked its fuel prices for the third time in two months amid its ongoing economic crisis'
      )}
      {newsArticle(
        'Putin on the wayy',
        'Russian President Vladimir Putin will visit Tajikistan and Turkmenistan, state news channel Rossiya 1 reported on Sunday. '
      )}
      {newsArticle(
        'Google on relocation',
        'In an email sent to its employees, Google has allowed them to relocate to another state "without justification" after US Supreme Court rolled back abortion rights. '
      )}
      {newsArticle(
        'Trump on SC decision',
        'Former US President Donald Trump praised the US Supreme Court decision overruling a woman right to an abortion, saying, "God made the decision." '
      )}
      
    </div>
  );
}

export default Widgets;
