# class Api::V1::DelisController < ApplicationController
#   def index
#     delis = Deli.all
#     render json: delis.to_json
#   end
#
#   def create
#     deli = Deli.create(deli_params)
#     render json: deli.to_json
#   end
#
#   private
#   def deli_params
#     params.permit(:id, :name, :address, :rating, :beer, :cat)
#   end
#
# end
