import Link from 'next/link';
import { BASE_URL } from '../utils/fetchWrapper';
import { Button } from './Form/Button';

export const CardFilter = ({ event }: any) => {
  const date = new Date(event.date);

  const bannerImage = `${BASE_URL}/uploads/${event.banner}`;

  const address = event.formattedAddress.split('-');

  return (
    <div className="rounded">
      <div
        className="relative p-3 flex w-full h-[150px] rounded-3xl rounded-b-none shadow"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white absolute top-3">
          <p className="text-2xl pb-1 font-bold">{event.title}</p>

          <div className="flex">
            <div className="mr-4 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <span>
                {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
              </span>
            </div>

            <div className="mr-4 flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {date.getHours()}h{date.getMinutes()}m
              </span>
            </div>
          </div>
        </div>

        <div className="text-white absolute bottom-2">
          <div className="mr-4 flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>{address[1]}</span>
          </div>
        </div>
      </div>

      <div className="relative p-3 flex flex-col w-full bg-slate-200 rounded-3xl rounded-t-none shadow">
        <p className="text-sm text-black">{event.description}</p>

        <div className="flex justify-center w-2/5 mx-auto my-4">
          <Link href={`/event-details/${event._id}`}>
            <Button title="Ver Detalhes do Evento" />
          </Link>
        </div>
      </div>
    </div>
  );
};
