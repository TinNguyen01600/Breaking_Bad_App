import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { colors } from '@mui/material';

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
                sx={{paddingLeft: '7px', backgroundColor: 'rgb(71, 125, 148)'}}
            >
                <SwapVertIcon />
                Sort
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
                <MenuItem onClick={() => { setIsMenuOpen(false); onClickDate(); }}>
                    {selectMenuDate ? "•  Year Released" : "Year Released"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); onClickScore(); }}>
                    {selectMenuScore ? "•  Rating Score" : "Rating Score"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); onClickDuration(); }}>
                    {selectMenuDuration ? "•  Duration" : "Duration"}
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { setIsMenuOpen(false); onClickAscending() }}>
                    {selectMenuAscending ? "•  Ascending" : "Ascending"}
                </MenuItem>
                <MenuItem onClick={() => { setIsMenuOpen(false); onClickDescending(); }}>
                    {selectMenuDescending ? "•  Descending" : "Descending"}
                </MenuItem>
            </Menu>
        </div>
    );
}
