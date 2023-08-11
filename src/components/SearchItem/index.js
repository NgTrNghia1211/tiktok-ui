import classNames from "classnames/bind";
import styles from './SearchItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles) 

function SearchItem({ children }) {
    return ( 
        <div className={cx('wrapper') }>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7103407749668536322.jpeg?x-expires=1691830800&x-signature=Kfv97t3HgXbLiLKeW%2Fa%2FpmMHfPg%3D" alt="img" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Kamisato Myst</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>kxmyst</span>
            </div>
        </div>
    );
}

export default SearchItem;