import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              urlToImage
                ? urlToImage
                : "https://i.ytimg.com/vi/kSanwZu1ioQ/hqdefault.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title} <span className="badge bg-secondary">{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
