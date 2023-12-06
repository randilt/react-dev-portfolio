import information from "../content/information";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {information.userData.firstName + information.userData.lastName}.
        All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
