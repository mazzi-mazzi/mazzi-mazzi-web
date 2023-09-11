import { currentUser } from "@clerk/nextjs";
import ApiClient from "./ApiClient";
import StravaArc from "./StravaArc";
import Image from "next/image";

// import UserCard from "../cards/UserCard";

// import { fetchCommunities } from "@/lib/actions/community.actions";
// import { fetchUsers } from "@/lib/actions/user.actions";

async function RightSidebar() {
  const user = await currentUser();
  if (!user) return null;

  // const similarMinds = await fetchUsers({
  //   userId: user.id,
  //   pageSize: 4,
  // });

  // const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });

  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>
          Suggested Communities
        </h3>

        <div className='text-heading4-small text-light-1 pt-10'>
          <ApiClient/>
        </div>

        <div className="w-128 h-128">
          <Image
            src="/dongsang.png"
            alt="왕복 3시간 반"
            objectFit="cover"
            width={512}
            height={512}
          />
        </div>

        <div className='mt-7 flex w-[350px] flex-col gap-9'>
          {/* {suggestedCOmmunities.communities.length > 0 ? (
            <>
              {suggestedCOmmunities.communities.map((community) => (
                <UserCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                  personType='Community'
                />
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>
              No communities yet
            </p>
          )} */}
        </div>
      </div>

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>

        {/* <StravaArc/> */}

        <div className='mt-7 flex w-[350px] flex-col gap-10'>
          {/* {similarMinds.users.length > 0 ? (
            <>
              {similarMinds.users.map((person) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType='User'
                />
              ))}
            </>
          ) : (
            <p className='!text-base-regular text-light-3'>No users yet</p>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
