import React from "react";

const CustomFieldintegration = ({ module, customData }) => {
  const { posts } = customData;

  console.log(posts);
  return (
    <div className="relative px-8 mb-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div className="custom-field-university" key={post.Country}>
              <div className="custom-field-university-title">
                {post.description}
              </div>

              <div className="custom-field-university-location">
                {post.Country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// function to resole post urls
const resolvePostUrls = function (sitemap, posts) {
  let dynamicUrls = {};
  posts.forEach((post) => {
    Object.keys(sitemap).forEach((path) => {
      if (sitemap[path].contentID === post.contentID) {
        dynamicUrls[post.contentID] = path;
      }
    });
  });

  return dynamicUrls;
};

CustomFieldintegration.getCustomInitialProps = async ({
  agility,
  channelName,
  languageCode,
}) => {
  // set up api
  const api = agility;

  try {
    // get sitemap...
    let sitemap = await api.getSitemapFlat({
      channelName: channelName,
      languageCode,
    });

    // get posts...
    let rawPosts = await api.getContentList({
      referenceName: "api",
      languageCode,
      contentLinkDepth: 2,
      depth: 2,
      take: 50,
    });

    const posts = rawPosts.items.map((post) => {
      // Descriptionn
      let description = post.fields.description;

      // Country
      let Country = post.fields.county;

      return {
        description,
        Country,
      };
    });

    return {
      posts,
    };
  } catch (error) {
    if (console) console.error(error);
  }
};

export default CustomFieldintegration;
