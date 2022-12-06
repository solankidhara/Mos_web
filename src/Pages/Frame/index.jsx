import links from '../../Components/constance/navLinks';
import NavBar from '../../Components/UI/NavBar/NavBar';

const Frame = () => {
      return (
            <div className="g-0 container-fluid">
                  <NavBar menu={links} />
            </div>
      );
};

export default Frame;
