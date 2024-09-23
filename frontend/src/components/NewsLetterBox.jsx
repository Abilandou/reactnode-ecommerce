const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gary-800'>
            Subscribe Now & get 20% off
        </p>
        <p className='text-gay-4000 mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form
            onSubmit={onSubmitHandler}
            className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input 
                className='w-full sm:flex-1 outline-none' 
                type="email" 
                placeholder='Enter your email'
                required
            />
            <button 
                type='submit'
                className='bg-black text-white px-10 py-4'
            >
                SUBSCRIBE
            </button>
        </form>
    </div>
  )
}

export default NewsLetterBox