import Cta from 'components/cta/cta';
import SearchBar from 'components/searchBar/searchBar';
import axios from 'axios';

function Dashboard(props) {
  const { heroes } = props;
  return (
    <div>
      <Cta href="/heroes">Go to heroes list</Cta>
      <h1>Tour of Heroes</h1>
      <SearchBar placeholder="Search a hero"/>
      { heroes.length > 1 && (
            <ol>
              {heroes.map(hero => <li key={hero}>{hero}</li>)}
            </ol>
          )}
    </div>
  );
}

Dashboard.getInitialProps = async () => {
  const res = await axios.get('http://localhost:3000/static/mocks/heroes.json');
  const heroes = await res.data;
  return { heroes };
};

export default Dashboard;
