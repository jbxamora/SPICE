import React from "react";
import Navbar from "../../components/NavBar"
import FullPost from "../../components/FullPost";

const Post = () => {
  const post = {
    title: "This is the post title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctorLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor.id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat lacinia enim, vel laoreet purus aliquet eu. In euismod, felis eget rhoncus dictum, sapien mi congue lorem, id faucibus elit eros eget lorem. Nullam eleifend velit eu nulla interdum auctor..",

    imageUrl: "https://picsum.photos/800/400",
    author: {
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    date: "April 8, 2023",
  };

  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20">
        <FullPost post={post} />
      </main>
     </div>
  );
};

export default Post;