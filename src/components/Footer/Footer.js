import React from 'react';
import shellhackstitle from './shellhackstitle.png';
//imported image from assets Shellhacks Marketing folder
import './footer.css';
//added links to social media, font awesome icons used, 3x size
export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img className="resize" src={shellhackstitle} />
      </div>
      <div className="two">
        <a href="https://2017.shellhacks.net/">
          <button className="b1">2017 Site</button>
        </a>
        <a href="https://imgur.com/a/CuJRC">
          <button>Wallpapers</button>
        </a>
        <br/>
        <a href="https://www.facebook.com/ShellHacks/?hc_ref=ARSRKiDxEclfu1Yp-F5FywUDSc_XQRWM-bBTOxnFm43xWiWmkas6V_gmALAPqaH6Te8" alt="Facebook"
          ><i className="fab fa-facebook fa-3x"></i>
        </a>
        <a href="https://twitter.com/shellhacks2017?lang=en">
          <i className="fab fa-twitter fa-3x"></i>
        </a>
        <a href="https://www.instagram.com/shellhacks/">
          <i className="fab fa-instagram fa-3x"></i>
        </a>
        <a href="#">
          <i className="fab fa-github fa-3x"></i>
        </a>
        <a href="https://discordapp.com/invite/upefiu">
          <i className="fab fa-discord fa-3x"></i>
        </a>
        <br/>
        <br/>
        
        <a className="mlhconduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
      </div>
    </div>
  );
}
