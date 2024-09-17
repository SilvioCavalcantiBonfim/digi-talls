class Admin::FaqsController < ApplicationController
  before_action :set_faq, only: %i[destroy]
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
