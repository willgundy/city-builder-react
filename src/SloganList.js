import React from 'react';

export default function SloganList({ citySlogans }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {/* This kind of component should be familiar by now. It takes in (as props) an array of slogans */}
      {/* Then map over those slogans and for each slogan, render a Slogan component. Supply a key and a slogan as props to each Slogan component */}
      {citySlogans.map((slogan, i) => <p key={i}>{slogan}</p>)}
    </section>
  );
}
