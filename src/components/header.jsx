import React, { PureComponent } from "react";

class Header extends PureComponent {
  render() {
    return (
      <header>
        <h2>
          <a href="" id="logo">
            스터디메이커
          </a>
        </h2>
        <nav>
          <ul>
            <li>
              <a href="">스터디 생성</a>
            </li>
            <li>
              <a href="">로그인</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
