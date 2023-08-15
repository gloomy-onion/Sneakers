import searchMagnifier from '../../img/searchMagnifier.svg';
import React from 'react';
import styles from './SearchInput.module.scss';

const SearchInput = (props) => {
   const { searchValue,onChangeSearchInput, setSearchValue } =props;
    return (<>
            <h1>
                {searchValue
                    ? `Поиск по запросу: ${searchValue}`
                    : 'Все кроссовки'}
            </h1>
            <div className={styles.search}>
                <img alt={'Search'} src={searchMagnifier}/>
                <input
                    placeholder={'Поиск...'}
                    value={searchValue}
                    className={styles.searchInput}
                    onChange={onChangeSearchInput}
                />
                {searchValue && (
                    <button
                        onClick={() => setSearchValue('')}
                        className={styles.clearBtn}
                    />
                )}
            </div>
        </>
    );
};

export default SearchInput;