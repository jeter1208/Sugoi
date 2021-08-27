class ProductsController < ApplicationController
  def index
    @products = Products.all
  end

  def new
  end

  def edit
  end
