import * as React from "react"
import {
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material"
import {Icon} from "../../@listingslab";

export default function Share() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        color="inherit"
        id="share-button"
        aria-controls={open ? "share-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icon icon="share" />
      </IconButton>
      <Menu
        id="share-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "share-button",
        }}
      >
        <MenuItem onClick={handleClose}>Twitter</MenuItem>
        <MenuItem onClick={handleClose}>Facebook</MenuItem>
        <MenuItem onClick={handleClose}>LinkedIn</MenuItem>
      </Menu>
    </div>
  )
}
