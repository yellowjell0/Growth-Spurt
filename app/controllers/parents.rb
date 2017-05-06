get '/parents/login' do
  erb :'parents/login'
end

post '/parents/login' do
  if request.xhr?
    parent = Parent.find_by(facebook_id: params[:id])
    parent.token = params[:token]
    session[:token] = parent.token
  end
  redirect '/'
end

get '/parents/new' do
  erb :'parents/new'
end

post '/parents/new' do
  if request.xhr?
    parent = Parent.create(facebook_id: params[:id], token: params[:token])
    session[:token] = parent.token
  end
  redirect '/'
end

get '/parents/:id' do
  @user = User.find_by(params[:id])
  erb :"parents/view"
end


