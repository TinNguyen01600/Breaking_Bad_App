import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

export default function SortMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const open = Boolean(isMenuOpen);

    const [selectMenuDate, setSelectMenuDate] = useState(true);
    const [selectMenuScore, setSelectMenuScore] = useState(false);
    const [selectMenuDuration, setSelectMenuDuration] = useState(false);

    const handleClick = (event) => {
        setIsMenuOpen(event.currentTarget);
    };
    const onClickDate = () => {
        setIsMenuOpen(false);
        setSelectMenuDate(true)
        setSelectMenuDuration(false)
        setSelectMenuScore(false)
    }
    const onClickScore = () => {
        setIsMenuOpen(false);
        setSelectMenuScore(true)
        setSelectMenuDuration(false)
        setSelectMenuDate(false)
    }
    const onClickDuration = () => {
        setIsMenuOpen(false);
        setSelectMenuDuration(true)
        setSelectMenuScore(false)
        setSelectMenuDate(false)
    }

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
            </Menu>
        </div>
    );
}
