import classes from './FooterList.module.css';

const FooterList = (props) => {
      return (
            <div className="d-flex flex-column justify-content-left">
                  <span className={'mb-4 fw-bold text-light ' + classes.title}>
                        {props.list.title}
                  </span>
                  {props.list.links.map((link, ind) => (
                        <span key={link + ind} className={'text-light mb-2 ' + classes.link}>
                              {link}
                        </span>
                  ))}
            </div>
      );
};

export default FooterList;
