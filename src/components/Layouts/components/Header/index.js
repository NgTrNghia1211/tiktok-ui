import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchItem from '~/components/SearchItem';


const cx = classNames.bind(styles);


function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // * handle search result to visible tippy
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 2000);
    }, [])

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok'/>
                </div>
                <Tippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-label')}>
                                        Results
                                    </h4>
                                    <SearchItem/>
                                    <SearchItem/>
                                    <SearchItem/>
                                </PopperWrapper>
                            </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input 
                            placeholder='Search accounts and videos'
                            spellCheck={false}
                        />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
    
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </Tippy>
                <div className='actions'>
                    {/* action */}
                </div>
            </div>
        </header>
     );
}

export default Header;