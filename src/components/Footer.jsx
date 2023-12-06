import information from "../content/information";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {information.userData.name}. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
