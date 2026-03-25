import React from 'react'

const Card = ({ user }) => {
  return (
    <article className='group relative m-3 w-full max-w-sm overflow-hidden rounded-3xl border border-black/10 bg-white/80 shadow-[0_14px_40px_-24px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(0,0,0,0.65)]'>
      <div className='relative h-32 overflow-hidden'>
        <img
          src={`${user.coverImage}?auto=format&fit=crop&w=900&q=80`}
          alt={`${user.fullName} cover`}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent' />
      </div>

      <div className='relative px-5 pb-5'>
        <img
          src={user.profile}
          alt={user.fullName}
          className='-mt-11 h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-md'
        />

        <div className='mt-3 flex items-start justify-between gap-3'>
          <div>
            <h2 className='text-xl font-semibold tracking-tight text-slate-900'>
              {user.fullName}
            </h2>
            <p className='text-sm font-medium text-slate-600'>{user.title}</p>
          </div>

          <button
            className={`rounded-xl px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${user.followed
                ? 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                : 'bg-slate-900 text-white hover:bg-slate-700'
              }`}
          >
            {user.followed ? 'Following' : 'Follow'}
          </button>
        </div>

        <div className='mt-5 grid grid-cols-2 gap-3'>
          <div className='rounded-xl bg-slate-900 px-3 py-2 text-white'>
            <p className='text-[11px] uppercase tracking-[0.16em] text-slate-300'>Likes</p>
            <p className='text-lg font-semibold'>{user.likesCount.toLocaleString()}</p>
          </div>
          <div className='rounded-xl bg-amber-100 px-3 py-2 text-slate-900'>
            <p className='text-[11px] uppercase tracking-[0.16em] text-slate-500'>Views</p>
            <p className='text-lg font-semibold'>{user.viewsCount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
export default Card
