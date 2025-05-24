import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import "./mobile-menu.module.scss";
import { Navbar } from "src/features/navbar";


export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);


  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        sx={{
          width: "30px",
          height: "30px",
          color: "#0788aa",
          borderColor: "#0788aa",
        }}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{
              fontSize: "14px",
              fontWeight: "lg",
              cursor: "pointer",
              padding: "2px 5px",
              borderRadius: "5px",
              backgroundColor: '#031232',
              color: '#ffffff',
              textTransform: 'lowercase'
            }}
          >
            Закрыть
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "left", background: "green" },
          }}
        >
          {/* <ListItemButton sx={{ fontWeight: "lg" }}>Главная</ListItemButton>
          <ListItemButton>Ремонт оборудования</ListItemButton>
          <ListItemButton>Ремонт спецтехники</ListItemButton>
          <ListItemButton>Произвщд</ListItemButton> */}
          <Navbar />
        </List>
      </Drawer>
    </React.Fragment>
  );
}
