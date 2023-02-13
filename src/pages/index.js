import { ClientComponent } from 'react-server-components';
import Weatherapp from '../src/pages/Weatherapp';

export default function IndexPage() {
  return (
    <ClientComponent>
      <div>
        <Weatherapp />
      </div>
    </ClientComponent>
  );
}
