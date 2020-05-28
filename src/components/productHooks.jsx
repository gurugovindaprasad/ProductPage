import React, { useState } from "react";

import {
  Grid,
  Typography,
  Paper,
  TextField,
  Tooltip,
} from "@material-ui/core/";
import {
  FormControl,
  MenuItem,
  Select,
  AppBar,
  Toolbar,
} from "@material-ui/core/";
import Container from "@material-ui/core/Container";
import "../product.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const useStyles = makeStyles({
  root: {
    paddingTop: "20px",
  },
  product: {
    display: "flex",
    overflowX: "auto",
    flexDirection: "row",
    justifyContent: "left",
    flexWrap: "nowrap",
  },
  colorVariant: {
    display: "flex",
    overflowX: "scroll",
    flexDirection: "row",
    justifyContent: "left",
    flexWrap: "nowrap",
  },
  imgList: {
    overflowY: "scroll",
    height: "auto",
    maxHeight: "500px",
  },
  smallImg: {
    height: "92px",
    width: "92px",
    margin: "10px 0",
    display: "block",
    cursor: "pointer",
    objectFit: "contain",
    border: "solid 1px gray",
    "&:hover": {
      borderColor: "blue",
    },
  },
  colorImg: {
    height: "80px",
    width: "80px",
    margin: "10px 10px 10px 10px",
    display: "block",
    cursor: "pointer",
    border: "solid 1px gray",
    "&:hover": {
      borderColor: "blue",
    },
    objectFit: "contain",
  },
  mainImg: {
    margin: "10px 0",
    border: "solid 1px gray",
  },
  price: {
    display: "flex",
    justifyContent: "left",
  },
  strike: {
    textDecoration: "line-through",
  },
  pointerCursor: {
    cursor: "pointer",
  },
});

const PriceContainer = (props) => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item>
        <Typography variant="h5">
          <b>₹{props.discount}/-</b>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="textSecondary">
          <s>₹ {props.price}</s>
        </Typography>
      </Grid>
    </Grid>
  );
};

const CheckOutDetails = () => {
  return (
    <Grid item xs={12} sm container>
      <Grid
        item
        xs
        container
        direction="column"
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Typography variant="h6">Select Coupon</Typography>
          <FormControlLabel
            value="BH100"
            control={<Radio color="secondary" />}
            label="BH100"
          />
          <FormControlLabel
            value="BW50"
            control={<Radio color="secondary" />}
            label="BW50"
          />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Button variant="contained" color="secondary">
            <ShoppingCartIcon />
          </Button>
          <Button variant="contained" color="secondary">
            <BookmarkIcon />
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<MonetizationOnIcon />}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Button color="secondary">
          <ShareIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

function ProductHooks() {
  const classes = useStyles();
  const [product, setProduct] = useState({
    productName: "Licensed Steel Bike",
    category: "Pants",
    subCategory: "Sports",
    retailPrice: "289.00",
    discountedPrice: "66",
    images: {
      variantName: "green",
      images: [
        "https://i.picsum.photos/id/274/200/300.jpg",
        "https://i.picsum.photos/id/702/200/300.jpg",
        "https://i.picsum.photos/id/407/200/300.jpg",
      ],
    },
    secondaryVariant: {
      size: ["xl", "xs", "l", "s", "m"],
      make: ["cotton", "test"],
    },
    otherImages: {
      blue: [
        "https://i.picsum.photos/id/496/200/300.jpg",
        "https://i.picsum.photos/id/554/200/300.jpg",
        "https://i.picsum.photos/id/814/200/300.jpg",
        "https://i.picsum.photos/id/436/200/300.jpg",
      ],
      yellow: [
        "https://i.picsum.photos/id/83/200/300.jpg",
        "https://i.picsum.photos/id/377/200/300.jpg",
        "https://i.picsum.photos/id/539/200/300.jpg",
      ],
      orange: [
        "https://i.picsum.photos/id/668/200/300.jpg",
        "https://i.picsum.photos/id/253/200/300.jpg",
        "https://i.picsum.photos/id/36/200/300.jpg",
        "https://i.picsum.photos/id/77/200/300.jpg",
        "https://i.picsum.photos/id/786/200/300.jpg",
      ],
    },
    inventory: {
      xl: 74,
      xs: 74,
      l: 61,
      s: 90,
      m: 18,
    },
    pincode: "108958-565474,685832-786525,623069-932530,201854-531693,",
    createdAt: 1589633411478,
    productDescription:
      "Ut saepe commodi quod doloremque est cupiditate sunt provident. Temporibus quaerat alias omnis aut. Libero dolorem laudantium rerum in sed. Nisi officia amet excepturi. Aut voluptatem consequatur id. Quo et est iure consequatur et eos. Cum id pariatur ad consequuntur ut. Quasi reprehenderit exercitationem totam dolores saepe. Molestiae repudiandae in corporis rem adipisci enim quia. Tempore autem autem accusamus error sit. Officiis ducimus praesentium et voluptas omnis sint. Et provident fugit rerum at. Culpa est maiores sit autem. Quaerat necessitatibus repellat. Quisquam itaque aut. Nisi non dignissimos. Ad iure provident reiciendis. Dolorum quo ipsa. Sit architecto dolore repudiandae. Quis excepturi et omnis expedita. Soluta voluptatem aliquam ratione velit. Et eos ratione accusantium soluta. Consectetur porro ea cum a. Voluptatum iste quas eum harum est. Quisquam est est asperiores asperiores quasi eum sapiente.",
    uuid: "8807b1ee-b5d5-4f64-afc5-35dc6cb87683",
    recommendations: [
      "af0e2836-011f-4c5c-a027-1e343666b6cd",
      "12178bc3-e47a-40f0-8618-6a15097c4035",
      "6576d6be-487a-4594-96ed-76dbafe65b67",
      "55851632-3ae9-47fe-9174-dcce361c4c46",
      "fe6f2bf0-d1ea-491e-b07f-61f0cc218d18",
    ],
    showCaseImage: null,
    connectionError: false,
    currentImageGroup: [
      "https://i.picsum.photos/id/274/200/300.jpg",
      "https://i.picsum.photos/id/702/200/300.jpg",
      "https://i.picsum.photos/id/407/200/300.jpg",
    ],
    showCaseImage: "https://i.picsum.photos/id/274/200/300.jpg",
  });

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Product
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={5} xs={12} md={5} sm={5}>
            <Grid container spacing={2}>
              <Grid item lg={3} xs={3} md={3} sm={3}>
                <div className={classes.imgList}>
                  {product.currentImageGroup.map((image) => (
                    <img
                      className={classes.smallImg}
                      src={image}
                      alt="title"
                      width="100%"
                      onMouseEnter={() =>
                        setProduct({ ...product, showCaseImage: image })
                      }
                    />
                  ))}
                </div>
              </Grid>
              <Grid item lg={9} xs={9} md={9} sm={9}>
                <img
                  className={classes.mainImg}
                  src={product.showCaseImage}
                  width="100%"
                  alt="title"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} xs={8} md={5} sm={5}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="h4">{product.productName}</Typography>
              </Grid>
              <Grid item>
                <PriceContainer
                  discount={product.discountedPrice}
                  price={product.retailPrice}
                />
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <Collapse in={product.descriptionOpen} collapsedHeight={40}>
                    <Typography variant="body2" color="textSecondary">
                      {product.productDescription}
                    </Typography>
                  </Collapse>
                </Typography>
                <Typography
                  className={classes.pointerCursor}
                  onClick={() =>
                    setProduct({
                      ...product,
                      descriptionOpen: !product.descriptionOpen,
                    })
                  }
                  variant="body2"
                  color="primary"
                >
                  Read More
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Color</Typography>
                <Grid item container spacing={2}>
                  {Object.keys(product.otherImages).map((key) => (
                    <Tooltip title={key} placement="top">
                      <img
                        className={classes.colorImg}
                        src={product.otherImages[key][0]}
                        alt="title"
                        onClick={() =>
                          setProduct(
                            {
                              ...product,
                              currentImageGroup: product.otherImages[key],
                            },
                            {
                              ...product,
                              showCaseImage: product.otherImages[key][0],
                            }
                          )
                        }
                      />
                    </Tooltip>
                  ))}
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body1">Size</Typography>

                <FormControl>
                  <Select>
                    {product.secondaryVariant["size"].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Typography variant="body1">Delivery</Typography>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className={classes.pointerCursor}
                          onClick={checkPinCode()}
                          color="primary"
                        >
                          <Typography variant="body1" color="primary">
                            Check
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={2} xs={4} md={2} sm={2}>
            <Paper style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              <CheckOutDetails />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );

  function checkPinCode() {
    console.log("Pincode Check");
  }
}

export default ProductHooks;
