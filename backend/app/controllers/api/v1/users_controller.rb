class Api::V1::UsersController < ApplicationController
    before_action :authorized, only: [:persist]
    
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def destroy
      @user = User.find(params[:id])
      @user.destroy
    end

    # REGISTER
    def create
      @user = User.create(user_params)
      if @user.valid?
        wristband = encode_token({user_id: @user.id})
        render json: {user: UserSerializer.new(@user), token: wristband}
      else
        render json: {error: "Invalid email or password"}
      end
    end

  # LOGGING IN
  def login
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      wristband = encode_token({user_id: @user.id})
      render json: {user: UserSerializer.new(@user), token: wristband}
    else
      render json: {error: "Invalid email or password"}
    end
  end


  def persist
    wristband = encode_token({user_id: @user.id})
    render json: {user: UserSerializer.new(@user), token: wristband}
  end

    

    def update
        @user = User.find(params[:id]);
        @user.update(user_params)
        if @user.valid?
            render json: @user
        else
            render json: {errors: @user.errors.full_messages}
        end
    end

    private
    def user_params
        params.permit(:email, :password, :cc_num, :exp_date, :phone, :address, :city_town, :state, :zip_code, :first_name, :last_name, :security_code, :billing_zip)
    end
end
