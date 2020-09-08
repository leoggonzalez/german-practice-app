class Api::V1::WordsController < ApplicationController
  before_action :find_word, only: [:show, :update, :destroy]

  # GET /words
  def index
    @words = Word.all
    render json: @words
  end

  # GET /words/:id
  def show
    if @word
      render json: @word
    else 
      render error: { error: "Can't find word." }, status: 404
    end
  end

  # POST /words
  def create
    @word = Word.new(word_params)
    if @word.save
      render json: @word
    else 
      render error: { error: 'Unable to create word.' }, status: 400
    end
  end

  # PUT /words/:id
  def update
    if @word
      @word.update(word_params)
      render json: { message: 'Word succesfully updated.' }, status: 200
    else
      render json: { message: 'Unable to update word.' }, status: 400
    end
  end

  # DELETE /words/:id
  def destroy
    if @word
      @word.destroy
      render json: { message: 'Word succesfully deleted.' }, status: 200
    else
      render json: { message: 'Unable to delete word.' }, status: 400
    end
  end

  private

  def word_params
    params.require(:word).permit(:name, :word_type, :definition, :name_en, :gender)
  end

  def find_word
    @word = Word.where(id: params[:id]).first
  end
end
