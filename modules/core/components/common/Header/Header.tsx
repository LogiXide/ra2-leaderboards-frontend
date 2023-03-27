import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppBar, Stack, Button, Toolbar, Typography } from '@mui/material';

import styles from './Header.module.css';

type TypeMenuItem = {
  id: number;
  label: string;
  href: string;
};

const menuList: TypeMenuItem[] = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Maps', href: '/maps' },
  { id: 3, label: 'Map Pools', href: '/map-pools' },
  { id: 4, label: 'Players', href: '/players' },
  { id: 5, label: 'Teams', href: '/teams' },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            color: 'white',
            marginRight: '40px',
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            alignItems="center"
            justifyContent="center"
          >
            Ra2 Leaderboards
          </Typography>
        </Link>
        <Stack direction="row" spacing={2}>
          {menuList.map((menuItem) => (
            <Link
              key={menuItem.id}
              href={menuItem.href}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button
                className={
                  router.pathname === menuItem.href ? `${styles.active}` : ''
                }
                color="inherit"
              >
                {menuItem.label}
              </Button>
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
