export default function Card({ img, title }) {
	return (
		<div className='bg-yellow-50 rounded-2xl @container'>
			<div className='p-12 @6xl:flex gap-12, @5xl:flex gap-10'>
				<img className='rounded-md @6xl:w-1/4' src={img} alt={img} />
				<div>
					<h1 className='text-lg font-serif font-bold my-2'>{title}</h1>
					<p className='text-sm text-gray-800'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad
						eaque quae magnam harum doloribus aperiam. Harum, eius? Voluptatum
						placeat facere consequatur aut. Eos molestias sint consequuntur
						officiis esse? Sapiente atque architecto cum est illum quidem
						dolorem, suscipit, corporis veritatis, temporibus laborum
						perferendis ut earum natus aspernatur explicabo tempora amet rem ad
						vel animi. Adipisci quasi aliquam minus ipsam ipsum?
					</p>
					<button
						className='bg-black hover:bg-orange-600 focus-visible:ring-light-300 active:bg-red-400 text-white font-bold py-2 px-4 rounded-md my-4'
						type='button'
					>
						Read more
					</button>
				</div>
			</div>
		</div>
	);
}
