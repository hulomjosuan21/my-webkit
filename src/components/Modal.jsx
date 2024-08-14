/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function Modal ({item}) {

  const [faviconUrl, setFaviconUrl] = useState('');

  useEffect(() => {
    const domain = new URL(item.link).hostname;
    const iconUrl = `https://logo.clearbit.com/${domain}`;
    setFaviconUrl(iconUrl);
  }, [item.link]);

  return (
    <div className="modal">
      <div className="modal-img-container">
        <img src={faviconUrl} alt="" />
      </div>
      <section className="modal_info">
        <h4>{item.name}</h4>
        <code>{item.link}</code>
        <p>{item.description}</p>
      </section>
      <section className="modal_controls_wrapper">
        <a href={item.link} target='_blank'>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </section>
    </div>
  )
}
