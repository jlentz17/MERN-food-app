import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.ingredients.map((ingredient) => `#${ingredient} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h5"
        component="h2"
        gutterBottom
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.recipe}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        <p>{counter}</p>
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Count Up!
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
