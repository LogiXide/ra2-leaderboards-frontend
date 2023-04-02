import Link from 'next/link';

import { Button } from '@mui/material';

type PropsType = {
  href: string;
  text: string;
};

export const LinkButton: React.FC<PropsType> = (props) => {
  return (
    <>
      <Link
        href={props.href}
        style={{
          textDecoration: 'none',
        }}
      >
        <Button sx={{ color: 'black' }}>{props.text}</Button>
      </Link>
    </>
  );
};
