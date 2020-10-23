import Home from 'views/Home';
import Elearning from 'views/Elearning';
import Main from 'layouts/Main';

export default () => {
  return (
    <div className="container">
      <Main>
        <Elearning />
      </Main>
    </div>
  )
}
