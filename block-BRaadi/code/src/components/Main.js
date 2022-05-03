import Location from './Location';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import ErrorBoundry2 from './ErrorBoundry2';
import ErrorBoundry3 from './ErrorBoundry3';

function Main() {
  return (
    <section id='section-one'>
      <div className='grid'>
        <ErrorBoundry2>
          <SectionOne />
          <ErrorBoundry3>
            <SectionTwo />
          </ErrorBoundry3>
          <Location />
        </ErrorBoundry2>
      </div>
    </section>
  );
}

export default Main;
