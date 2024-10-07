class Admin::FaqsController < ApplicationController
  before_action :set_faq, only: %i[destroy edit update]
  before_action :authenticate_user!

  def index
    @faqs = Faq.all
  end

  # GET /admin/faqs/new
  def new
    @faq = Faq.new
  end

  # POST /admin/faqs or /admin/faqs.json
  def create
    @faq = Faq.new(faq_params)

    respond_to do |format|
      if @faq.save
        format.html { redirect_to @faq, notice: 'Faq was successfully created.' }
        format.json { render :show, status: :created, location: @faq }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @faq.errors, status: :unprocessable_entity }
      end
    end
  end

  # GET /admin/faq/1/edit
  def edit; end

  # PATCH/PUT /admin/faq/1 or /admin/faq/1.json
  def update
    respond_to do |format|
      if @faq.update(faq_params)
        format.html { redirect_to admin_faqs_path, status: :see_other, notice: 'Faq was successfully destroyed.' }
        format.json { head :no_content }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @faq.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE admin/faqs/1 or admin/faqs/1.json
  def destroy
    @faq.destroy

    respond_to do |format|
      format.html { redirect_to admin_faqs_path, status: :see_other, notice: 'Faq was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_faq
    @faq = Faq.find(params[:id])
  end

  def faq_params
    params.require(:faq).permit(:question, :answer, :is_active)
  end
end
