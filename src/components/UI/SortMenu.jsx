import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function SortMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectMenuItem, setSelectMenuItem] = useState(false);
    const handleClick = (event) => {
        setIsMenuOpen(event.currentTarget);
    };
    const handleClose = () => {
        setIsMenuOpen(null);
        setSelectMenuItem(!selectMenuItem);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={isMenuOpen}
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    {selectMenuItem ? "•  Year Released" : "Year Released"}
                </MenuItem>
            </Menu>
        </div>
    );
}
