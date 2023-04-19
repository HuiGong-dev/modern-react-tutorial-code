import React from 'react';
import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          click me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          buy now
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          see deal
        </Button>
      </div>
      <div>
        <Button warning>hide ads</Button>
      </div>
      <div>
        <Button primary rounded>
          hello world!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
