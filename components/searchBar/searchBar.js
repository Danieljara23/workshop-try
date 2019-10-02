import css from "./searchBar.scss";
import SvgIcon from "components/searchBar/searchBar";

    function SearchBar(props) {
      const { placeholder } = props;

      return (<div className={css.searchBar}>
          <div className={css.searchIcon}>
            <SvgIcon iconName="search" />
          </div>
          <input placeholder={placeholder} />
      </div>);
    }

    export default SearchBar;