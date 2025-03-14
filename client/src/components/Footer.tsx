import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY NC
            SA 4.0</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;