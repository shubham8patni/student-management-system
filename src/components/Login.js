import React, { Fragment } from 'react';
import Media  from 'react-media';



export default function Login() {
    return (
        <div className="p-2 ">
            <div className="container mx-auto mt-4  d-flex justify-content-center">
            <Media queries={{
                small: "(max-width: 760px)",
                medium: "(min-width: 760px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
                }}>
                {matches => (
                    <Fragment>
                    {matches.large && <div className=" mb-5 border p-5 mt-5  media-query" style={{boxShadow:"4px 8px #EEE8E8", width:"50%"}}>
                        <form>
                            <div class="mb-3">
                                <h2 className="text-center">Login</h2>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form> 
                    </div>}
                    {matches.medium && <div className=" mb-5 border p-5 mt-5  media-query" style={{boxShadow:"4px 8px #EEE8E8", width:"80%"}}>
                        <form>
                            <div class="mb-3">
                                <h2 className="text-center">Login</h2>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form> 
                    </div>}
                    {matches.small && <div className=" mb-5 border p-3 mt-5  media-query" style={{boxShadow:"4px 8px #EEE8E8", width:"100%"}}>
                        <form>
                            <div class="mb-3">
                                <h2 className="text-center">Login</h2>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form> 
                    </div>}
                   
                    </Fragment>
                )}
            </Media>
                
                   
            </div>
            

        </div>
    )
}


Login.defaultProps = {
    width : "50%"               
}