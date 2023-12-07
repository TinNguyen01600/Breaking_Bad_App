import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

export default function SortMenu({ menuItems }) {
    const {
        selectMenuDate, onClickDate,
        selectMenuScore, onClickScore,
        selectMenuDuration, onClickDuration,
        selectMenuAscending, onClickAscending, 
        selectMenuDescending, onClickDescending
    } = menuItems

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const open = Boolean(isMenuOpen);

    const handleClick = (event) => {
        setIsMenuOpen(event.currentTarget);
    };

    return (
        <div>
            <Button
                variant='contained'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={isMenuOpen}
                open={open}
                onClose={() => setIsMenuOpen(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={onClickDate}>
                    {selectMenuDate ? "•  Year Released" : "Year Released"}
                </MenuItem>
                <MenuItem onClick={onClickScore}>
                    {selectMenuScore ? "•  Rating Score" : "Rating Score"}
                </MenuItem>
                <MenuItem onClick={onClickDuration}>
                    {selectMenuDuration ? "•  Duration" : "Duration"}
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                    onClickAscending()
                    setIsMenuOpen(false)
                }}>
                    {selectMenuAscending ? "•  Ascending" : "Ascending"}
                </MenuItem>
                <MenuItem onClick={() => {
                    onClickDescending()
                    setIsMenuOpen(false)
                }}>
                    {selectMenuDescending ? "•  Descending" : "Descending"}
                </MenuItem>
            </Menu>
        </div>
    );
}
