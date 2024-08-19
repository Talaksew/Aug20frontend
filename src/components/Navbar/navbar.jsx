import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack, Button, Menu, MenuItem, CircularProgress } from '@mui/material';

function Navbar() {
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorElProfile);

  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorElMenu);

  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  const [loading, setLoading] = useState(true);

  const handleProfileClick = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleMenuClick = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axios.get('/api/auth/status');
        setAuthState({
          isAuthenticated: response.data.isAuthenticated,
          user: response.data.user,
        });
      } catch (error) {
        console.error('Error fetching authentication status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthStatus();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>African Talent Network</h1>
      </div>
      <div className="navbar__center">
        <input type="text" placeholder="Search ..." />
        <SearchIcon />
      </div>
      <div className="navbar__right">
        <Stack direction="row" spacing={2}>
          <Button
            id="profile-menu"
            onClick={handleProfileClick}
            aria-controls={openProfile ? 'profile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? 'true' : undefined}
            aria-label="profile-menu"
          >
            <AccountCircleIcon />
          </Button>
          <Button
            id="main-menu"
            onClick={handleMenuClick}
            aria-controls={openMenu ? 'main-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            aria-label="main-menu"
          >
            <MenuIcon />
          </Button>
        </Stack>

        <Menu
          id="profile-menu"
          anchorEl={anchorElProfile}
          open={openProfile}
          onClose={handleCloseProfile}
          MenuListProps={{ 'aria-labelledby': 'profile-button' }}
        >
          {loading ? (
            <MenuItem onClick={handleCloseProfile}>
              <CircularProgress size={24} />
            </MenuItem>
          ) : authState.isAuthenticated ? (
            <>
              <MenuItem onClick={handleCloseProfile}>
                My Reserved Lists
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                Profile
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleCloseProfile}>
                <Link to="/signup">Signup</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <Link to="/login">Login</Link>
              </MenuItem>
            </>
          )}
        </Menu>

        <Menu
          id="main-menu"
          anchorEl={anchorElMenu}
          open={openMenu}
          onClose={handleCloseMenu}
          MenuListProps={{ 'aria-labelledby': 'menu-button' }}
        >
          <MenuItem onClick={handleCloseMenu}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <Link to="/contactus">Contact Us</Link>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            New Item
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            New Hotel
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            Items List
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            Reserved List
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            Officers
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;



// {authState.isAuthenticated ? (
//   <>
//     <MenuItem onClick={handleCloseProfile}><Link to="/myreserve">My Reserved Lists</Link></MenuItem>
//     <MenuItem onClick={handleCloseProfile}><Link to="/profile">Profile</Link></MenuItem>
//     <MenuItem onClick={handleCloseProfile}><button onClick={handleLogout}>Logout</button></MenuItem>
//   </>
// ) : (
//   <>
//     <MenuItem onClick={handleCloseProfile}><Link to="/signup">Signup</Link></MenuItem>
//     <MenuItem onClick={handleCloseProfile}><Link to="/login">Login</Link></MenuItem>
//   </>
// )}
// </Menu>

// <Menu
// id="main-menu"
// anchorEl={anchorElMenu}
// open={Boolean(anchorElMenu)}
// onClose={handleCloseMenu}
// MenuListProps={{ 'aria-labelledby': 'menu-button' }}
// >
// <MenuItem onClick={handleCloseMenu}><Link to="/">Home</Link></MenuItem>
// <MenuItem onClick={handleCloseMenu}><Link to="/about">About</Link></MenuItem>
// <MenuItem onClick={handleCloseMenu}><Link to="/contactus">Contact Us</Link></MenuItem>
// {authState.isAuthenticated && authState.user && (
//   <>
//     {(authState.user.role === 'officer' || authState.user.role === 'admin') && (
//       <>
//         <MenuItem onClick={handleCloseMenu}><Link to="/new">New Item</Link></MenuItem>
//         <MenuItem onClick={handleCloseMenu}><Link to="/addhotel">New Hotel</Link></MenuItem>
//         <MenuItem onClick={handleCloseMenu}><Link to="/items-list">Items List</Link></MenuItem>
//         <MenuItem onClick={handleCloseMenu}><Link to="/reserved">Reserved List</Link></MenuItem>
//       </>
//     )}
//     {authState.user.role === 'admin' && (
//       <MenuItem onClick={handleCloseMenu}><Link to="/officers">Officers</Link></MenuItem>
//     )}
//   </>
// )}
// </Menu>

//----
// useEffect(() => {
//   const fetchUserInfo = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/profile', { withCredentials: true });
//       if (response.status === 200) {
//         setAuthState({
//           isAuthenticated: true,
//           user: response.data,
//         });
//       } else {
//         setAuthState({
//           isAuthenticated: false,
//           user: null,
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching user info:', error.response ? error.response.data : error.message);
//       setAuthState({
//         isAuthenticated: false,
//         user: null,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchUserInfo();
// }, []);

// const handleLogout = async () => {
//   try {
//     await axios.get('http://localhost:4000/logout', { withCredentials: true });
//     setAuthState({
//       isAuthenticated: false,
//       user: null,
//     });
//   } catch (error) {
//     console.error('Error logging out:', error.response ? error.response.data : error.message);
//   }
// };

// if (loading) {
//   return (
//     <div className="navbar__loading">
//       <CircularProgress />
//     </div>
//   );
// }
