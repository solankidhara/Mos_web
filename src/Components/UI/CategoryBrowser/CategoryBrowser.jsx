import { Container } from 'react-bootstrap';
import CategoryImage from '../../Layout/CategoryImage/CategoryImage';
import classes from './CategoryBrowser.module.css';

const CategoryBrowser = (props) => {
      return (
            <Container className={props['bs-class']}>
                  <span className={'ms-lg-5 ' + classes['trending-title']}>{props.children}</span>
                  <div className="d-flex flex-wrap justify-content-center">
                        {props.categories.map((cat, ind) => (
                              <CategoryImage
                                    key={ind + cat.title}
                                    title={cat.title}
                                    thumbnail={cat.thumbnail}
                              />
                        ))}
                  </div>
            </Container>
      );
};

export default CategoryBrowser;
