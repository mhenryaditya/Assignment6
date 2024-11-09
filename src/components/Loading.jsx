function Loading({err}) {
    return (
        <div className={"w-50 rounded shadow-lg d-flex flex-column gap-3 align-items-center p-5" + (!err ? ' bg-body':  ' bg-secondary text-bg-secondary')} style={{height: 'fit-content'}}>
            {(!err ? <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status"></div> : '')}
            <span className="d-flex flex-column align-items-center">
              <span className='fs-3 fw-medium'>{(!err ? 'Please Wait' : 'Offline')}</span>
              <span className='fs-5'>{(!err ? 'Page is loading the content...' : "You're offline, make sure you've connected to the internet.")}</span>
            </span>
          </div>
    )
}

export default Loading